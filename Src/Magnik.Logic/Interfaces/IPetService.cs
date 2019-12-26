using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.PetViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.Logic.Interfaces
{
    public interface IPetService
    {
        IEnumerable<Pet> FindPetsByEmail(string email);
        Task<ResponseVM> CreatePet(PetVM model, string email);
        bool DeletePetById(int petId);
    }
}