using Magnik.DataProvider.Interfaces;
using Magnik.Model.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.DataProvider.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        public Task AddToRole(Account account)
        {
            throw new System.NotImplementedException();
        }

        public Task<IdentityResult> CreateAccount(Account account, string password)
        {
            throw new System.NotImplementedException();
        }

        public Task<Account> FindByIdAccount(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Account> FindByNameAccount(string email)
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<string>> GetAccountRoles(Account account)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Account> GetAllUsers()
        {
            throw new System.NotImplementedException();
        }

        public Task<SignInResult> SignIn(string email, string password, bool rememberMe, bool flag)
        {
            throw new System.NotImplementedException();
        }

        public Task SignOut()
        {
            throw new System.NotImplementedException();
        }
    }
}