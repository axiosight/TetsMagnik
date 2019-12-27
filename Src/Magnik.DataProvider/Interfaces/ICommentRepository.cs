using Magnik.Model.Entities;
using Magnik.Model.ViewModel.CommentViewModel;
using System.Collections.Generic;

namespace Magnik.DataProvider.Interfaces
{
    public interface ICommentRepository : IRepository<Comment>
    {
        IEnumerable<Comment> GetCommentsOfAccount(string id);
        bool DeleteById(int Id);
    }
}