using Magnik.DataProvider.Interfaces;
using Magnik.Model.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Magnik.DataProvider.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<Account> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<Account> _signInManager;

        public AccountRepository(UserManager<Account> userManager, RoleManager<IdentityRole> roleManager, SignInManager<Account> signInManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }

        public async Task AddToRolePetSitter(Account account)
        {
            await _userManager.AddToRoleAsync(account, "sitter");
        }

        public async Task<bool> CheckPassword(Account account, string password)
        {
            return await _userManager.CheckPasswordAsync(account, password);
        }

        public async Task<IdentityResult> CreateAccount(Account account, string password)
        {
            IdentityResult result = await _userManager.CreateAsync(account, password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(account, false);
                await _userManager.AddToRoleAsync(account, "user");
                await _userManager.UpdateAsync(account);
            }

            return result;
        }

        public async Task<Account> FindByIdAccount(string id)
        {
            return await _userManager.FindByIdAsync(id);
        }

        public async Task<Account> FindByNameAccount(string email)
        {
            return await _userManager.FindByNameAsync(email);
        }

        public async Task<string> GenerateEmailConfirmationToken(Account account)
        {
            string code = await _userManager.GenerateEmailConfirmationTokenAsync(account);

            return code;
        }

        public async Task<IEnumerable<string>> GetAccountRoles(Account account)
        {
            return await _userManager.GetRolesAsync(account);
        }

        public IEnumerable<Account> GetAllUsers()
        {
            return _userManager.Users.ToList();
        }

        public async Task<SignInResult> SignIn(string email, string password, bool rememberMe, bool flag)
        {
            return await _signInManager.PasswordSignInAsync(email, password, rememberMe, false);
        }

        public Task SignOut()
        {
            return _signInManager.SignOutAsync();
        }
    }
}