using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magnik.Common.Constants;
using Magnik.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magnik.WebClient.Controllers
{
    [ApiController]
    public class SitterController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public SitterController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet(RoutesApi.Sitter.GetAllSitters)]
        public IActionResult GetSitters()
        {
            var res = _accountService.GetAllSitters();

            if(res != null)
            {
                return Ok(res);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}