using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.AccountViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.Logic.Interfaces
{
    public interface IAccountService
    {
        Task<AuthentificationResult> CreateAccount(UserRegisterVM model);
        Task<UserVM> FindByEmail(string email);
        Task<UserVM> FindById(string id);
        IEnumerable<UserVM> GetAll();
        IEnumerable<UserVM> GetAllSitters();
        Task<AuthentificationResult> SignIn(UserLoginVM model);
        Task SignOut();
        Task<ResponseVM> UpdateAccount(UserVM model);

    }
}