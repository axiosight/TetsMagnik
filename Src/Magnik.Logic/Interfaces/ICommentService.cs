using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.CommentViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Magnik.Logic.Interfaces
{
    public interface ICommentService
    {
        ResponseVM CreateComment(CommentVM model, string email);
        IEnumerable<Comment> GetCommentsOfAccount(string email);
        bool DeleteCommentById(int petId);
    }
}