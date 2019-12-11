using System.Collections.Generic;
using Magnik.DataProvider.Interfaces;
using Magnik.Model.Context;
using Magnik.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Magnik.DataProvider.Repositories
{
    public class PetInfoRepository : IPetInfoRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public PetInfoRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Create(PetInfo item)
        {
            _databaseContext.PetInfos.Add(item);
        }

        public void Delete(int id)
        {
            PetInfo item = _databaseContext.PetInfos.Find(id);
            _databaseContext.PetInfos.Remove(item);
        }

        public PetInfo Get(int id)
        {
            return _databaseContext.PetInfos.Find(id);
        }

        public IEnumerable<PetInfo> GetAll()
        {
            return _databaseContext.PetInfos;
        }

        public void Update(PetInfo item)
        {
            _databaseContext.Entry(item).State = EntityState.Modified;
        }
    }
}