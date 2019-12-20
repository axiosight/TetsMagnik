using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.ViewModel.AccountViewModel;
using System.Threading.Tasks;

namespace Magnik.Logic.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;

        public AccountService(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<AuthentificationResult> CreateAccount(UserRegisterVM model)
        {
            throw new System.NotImplementedException();
        }
    }
}