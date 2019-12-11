using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;

namespace Magnik.Logic.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;

        public AccountService(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }
    }
}