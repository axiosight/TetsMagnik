using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magnik.Common.Constants;
using Magnik.Logic.Interfaces;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.PetViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magnik.WebClient.Controllers
{
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly IPetService _petService;
        public PetController(IPetService petService)
        {
            _petService = petService;
        }

        [HttpPost(RoutesApi.Pet.AddPet)]
        public async Task<IActionResult> Create([FromForm]PetVM model)
        {
            ResponseVM response = new ResponseVM();
            var email = User.Identity.Name;

            if (ModelState.IsValid)
            {
                response = await _petService.CreatePet(model, email);

                if (response.Result)
                {
                    return Ok(response);
                }
            }

            return BadRequest(response);
        }

        [HttpGet(RoutesApi.Pet.ViewAllPetsOfAccount)]
        public IActionResult Get()
        {
            var email = User.Identity.Name;

            if (email != null)
            {
                var res = _petService.FindPetsByEmail(email);
                return Ok(res);
            }
            return BadRequest();
        }

        [HttpDelete(RoutesApi.Pet.DeletePet)]
        public IActionResult Delete(int id)
        {
            //var petId = Convert.ToInt32(id);

            bool del = _petService.DeletePetById(id);
            if (del)
            {
                return Ok();
            }
            return BadRequest();
        }

        //[HttpGet(RoutesApi.Pet.ViewPets)]
        //public async Task<IActionResult> GetAccount()
        //{
        //    var email = User.Identity.Name;

        //    if (email != null)
        //    {
        //        var user = await _petService.FindPetsByEmail(email);

        //        return Ok(new PetVM
        //        {
        //        });
        //    }
        //}
    }
}