using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.Context.CommitProvider;
using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.CommentViewModel;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.Logic.Services
{
    public class CommentService : ICommentService
    {
        private readonly ICommitProvider _commitProvider;
        private readonly ICommentRepository _commentRepository;
        private readonly IAccountRepository _accountRepository;

        public CommentService(ICommitProvider commitProvider, ICommentRepository commentRepository, IAccountRepository accountRepository)
        {
            _commitProvider = commitProvider;
            _commentRepository = commentRepository;
            _accountRepository = accountRepository;
        }

        public ResponseVM CreateComment(CommentVM model, string email)
        {
            bool res = false;

            if (email != null)
            {
                _commentRepository.Create(new Comment
                {
                    Title = model.Title,
                    Content = model.Message,
                    AccounEmail = email,
                    CommentTime = DateTime.Now,
                    AccountId = model.AccountId
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

        public IEnumerable<Comment> GetCommentsOfAccount(string email)
        {
            var account = _accountRepository.FindByNameAccount(email);
            return _commentRepository.GetCommentsOfAccount(account.Result.Id);
        }

        public bool DeleteCommentById(int petId)
        {
            var res = _commentRepository.DeleteById(petId);
            _commitProvider.Save();
            return res;
        }
    }
}