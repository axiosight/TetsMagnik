using System.Collections.Generic;
using Magnik.DataProvider.Interfaces;
using Magnik.Model.Context;
using Magnik.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Magnik.DataProvider.Repositories
{
    public class CommentRepository : ICommentRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public CommentRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Create(Comment item)
        {
            _databaseContext.Comments.Add(item);
        }

        public void Delete(int id)
        {
            Comment item = _databaseContext.Comments.Find(id);
            _databaseContext.Comments.Remove(item);
        }

        public Comment Get(int id)
        {
            return _databaseContext.Comments.Find(id);
        }

        public IEnumerable<Comment> GetAll()
        {
            return _databaseContext.Comments;
        }

        public void Update(Comment item)
        {
            _databaseContext.Entry(item).State = EntityState.Modified;
        }
    }
}