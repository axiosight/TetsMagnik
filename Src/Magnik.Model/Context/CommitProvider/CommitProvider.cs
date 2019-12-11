using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Context.CommitProvider
{
    public class CommitProvider : ICommitProvider
    {
        private readonly IDatabaseContext _databaseContext;

        public CommitProvider(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Save()
        {
            _databaseContext.SaveChanges();
        }
    }
}
