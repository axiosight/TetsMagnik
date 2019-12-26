using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magnik.Common.Constants;
using Magnik.Logic.Interfaces;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.AccountViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magnik.WebClient.Controllers
{
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost(RoutesApi.Account.Register)]
        public async Task<IActionResult> Register([FromForm]UserRegisterVM model)
        {

            var result = await _accountService.CreateAccount(model);

            if (!result.Success)
            {
                return BadRequest(new AuthentificationResult
                {
                    Errors = result.Errors
                });
            }

            return Ok(new AuthentificationResult()
            {
                Errors = new List<string>()
            });
        }

        [HttpPost(RoutesApi.Account.Login)]
        public async Task<IActionResult> Login([FromForm]UserLoginVM model)
        {
            var authResponse = await _accountService.SignIn(model);

            if (!authResponse.Success)
            {
                return BadRequest(new AuthentificationResult
                {
                    Errors = authResponse.Errors
                });
            }

            return Ok(new AuthentificationResult
            {
                Errors = new List<string>()
            });
        }

        [HttpPost(RoutesApi.Account.LogOut)]
        public async Task Logout()
        {
            await _accountService.SignOut();
        }

        [HttpGet(RoutesApi.Account.Get)]
        public async Task<IActionResult> GetAccount()
        {
            var email = User.Identity.Name;

            if (email != null)
            {
                var user = await _accountService.FindByEmail(email);

                return Ok(new UserVM
                {
                    UserId = user.UserId,
                    Email = user.Email,
                    Name = user.Name,
                    Surame = user.Surame,
                    Street = user.Street,
                    Mobile = user.Mobile,
                    ZIP = user.ZIP,
                    Desciption = user.Desciption,
                    Roles = user.Roles
                });
            }

            return Ok(new UserVM
            {
                Roles = new List<string>()
            });
        }

        [HttpPost(RoutesApi.Account.UpdateAccount)]
        public async Task<IActionResult> UpdateAccount([FromForm]UserVM model)
        {

            if (ModelState.IsValid)
            {
                var result = await _accountService.UpdateAccount(model);

                if (result.Result)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest(result);
                }
            }
            else
            {
                return BadRequest(new ResponseVM()
                {
                    Result = false,
                    Message = "Not Valid!"
                });
            }
        }

    }
}