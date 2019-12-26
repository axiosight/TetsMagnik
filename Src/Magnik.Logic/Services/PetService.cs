using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.Context.CommitProvider;
using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.PetViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.Logic.Services
{
    public class PetService : IPetService
    {
        private readonly IPetRepository _petRepository;
        private readonly IAccountRepository _accountRepository;
        private readonly ICommitProvider _commitProvider;

        public PetService(IPetRepository petRepository, IAccountRepository accountRepository, ICommitProvider commitProvider)
        {
            _petRepository = petRepository;
            _accountRepository = accountRepository;
            _commitProvider = commitProvider;
        }

        public IEnumerable<Pet> FindPetsByEmail(string email)
        {
            var account = _accountRepository.FindByNameAccount(email);
            var res = _petRepository.GetPetsOfAccount(account.Result.Id);
            return res;
        }

        public async Task<ResponseVM> CreatePet(PetVM model, string email)
        {
            bool res = false;
            var account = await _accountRepository.FindByNameAccount(email);

            if(account != null)
            {
                _petRepository.Create(new Pet
                {
                    PetName = model.PetName,
                    PetAge = model.PetAge,
                    PetSex = model.PetSex,
                    PetWeight = model.PetWeight,
                    AccountId = account.Id
                });

                _commitProvider.Save();

                return new ResponseVM()
                {
                    Result = true,
                    Message = "Pet Createed"
                };
                
            }
            else
            {
                return new ResponseVM()
                {
                    Result = res,
                    Message = "Account not Found!"
                };
            }
        }

        public bool DeletePetById(int petId)
        {
            var res = _petRepository.DeleteById(petId);
            _commitProvider.Save();
            return res;
        }

        //public async Task<PetVM> FindPetsByEmail(string email)
        //{
        //    return await _petRepository.FindPetsByEmail(email);
        //}
    }
}