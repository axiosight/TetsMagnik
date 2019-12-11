using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.Context.CommitProvider;

namespace Magnik.Logic.Services
{
    public class CommentService : ICommentService
    {
        private readonly ICommitProvider _commitProvider;
        private readonly ICommentRepository _commentRepository;

        public CommentService(ICommitProvider commitProvider, ICommentRepository commentRepository)
        {
            _commitProvider = commitProvider;
            _commentRepository = commentRepository;
        }
    }
}