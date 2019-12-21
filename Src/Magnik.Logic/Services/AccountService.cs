using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.Entities;
using Magnik.Model.ViewModel.AccountViewModel;
using System.Collections.Generic;
using System.Linq;
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
            var existingUser = await _accountRepository.FindByNameAccount(model.Email);

            if (existingUser != null)
            {
                return new AuthentificationResult
                {
                    Errors = new[] { "User with this email already exists!" }
                };
            }

            Account account = new Account { Email = model.Email, UserName = model.Email, UName = model.Name, USurname = model.Surname, PhoneNumber = model.Mobile };

            var result = await _accountRepository.CreateAccount(account, model.Password);

            if (!result.Succeeded)
            {
                return new AuthentificationResult
                {
                    Errors = result.Errors
                        .Select(x => x.Description)
                };
            }

            //await _userRepository.AddToRole(account);

            var code = await _accountRepository.GenerateEmailConfirmationToken(account);

            return new AuthentificationResult
            {
                Success = true,
                Code = code
            };
        }

        public async Task<UserVM> FindByEmail(string email)
        {
            Account account = await _accountRepository.FindByNameAccount(email);

            IEnumerable<string> userRoles = await _accountRepository.GetAccountRoles(account);

            return new UserVM
            {
                UserId = account.Id,
                Email = account.Email,
                Name = account.UName,
                Surame = account.USurname,
                Street = account.Street,
                ZIP = account.ZIP,
                Mobile = account.PhoneNumber,
                Desciption = account.Description,
                Roles = userRoles
            };
        }

        public async Task<UserVM> FindById(string id)
        {
            Account user = await _accountRepository.FindByIdAccount(id);

            return new UserVM
            {
                UserId = user.Id,
                Email = user.Email
            };
        }

        public IEnumerable<UserVM> GetAll()
        {
            var users = _accountRepository.GetAllUsers()
                 .Select(x => new UserVM
                 {
                     UserId = x.Id,
                     Email = x.Email
                 }).ToList();

            return users;
        }

        public async Task<AuthentificationResult> SignIn(UserLoginVM model)
        {
            var account = await _accountRepository.FindByNameAccount(model.Email);

            if (account == null)
            {
                return new AuthentificationResult
                {
                    Errors = new[] { "User does not exist!" }
                };
            }

            var passwordValid = await _accountRepository.CheckPassword(account, model.Password);

            if (!passwordValid)
            {
                return new AuthentificationResult
                {
                    Errors = new[] { "User/password combination are wrong!" }
                };
            }

            await _accountRepository.SignIn(model.Email, model.Password, model.RememberMe, false);

            return new AuthentificationResult
            {
                Success = true
            };
        }

        public async Task SignOut()
        {
            await _accountRepository.SignOut();
        }
    }
}