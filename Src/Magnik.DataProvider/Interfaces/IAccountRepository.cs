using Magnik.Model.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.DataProvider.Interfaces
{
    public interface IAccountRepository
    {
        Task<IdentityResult> CreateAccount(Account account, string password);
        Task<SignInResult> SignIn(string email, string password, bool rememberMe, bool flag);
        Task SignOut();
        Task<Account> FindByIdAccount(string id);
        Task<Account> FindByNameAccount(string email);
        IEnumerable<Account> GetAllUsers();
        Task AddToRolePetSitter(Account account);
        Task<IEnumerable<string>> GetAccountRoles(Account account);
        Task<string> GenerateEmailConfirmationToken(Account account);
        Task<bool> CheckPassword(Account account, string password);
    }
}