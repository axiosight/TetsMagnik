﻿using Magnik.Model.ViewModel.AccountViewModel;
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
        Task<AuthentificationResult> SignIn(UserLoginVM model);
        Task SignOut();
    }
}