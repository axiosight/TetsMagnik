using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magnik.Common.Constants;
using Magnik.Logic.Interfaces;
using Magnik.Model.ViewModel.AccountViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magnik.WebClient.Controllers
{
    [Route("api/[controller]")]
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

            var result;

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

    }
}