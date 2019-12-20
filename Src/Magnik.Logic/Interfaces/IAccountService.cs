using Magnik.Model.ViewModel.AccountViewModel;
using System.Threading.Tasks;

namespace Magnik.Logic.Interfaces
{
    public interface IAccountService
    {
        Task<AuthentificationResult> CreateAccount(UserRegisterVM model);
    }
}