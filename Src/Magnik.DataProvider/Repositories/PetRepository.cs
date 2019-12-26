using System.Collections.Generic;
using System.Linq;
using Magnik.DataProvider.Interfaces;
using Magnik.Model.Context;
using Magnik.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Magnik.DataProvider.Repositories
{
    public class PetRepository : IPetRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public PetRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Create(Pet item)
        {
            _databaseContext.Pets.Add(item);
        }

        public void Delete(int id)
        {
            Pet item = _databaseContext.Pets.Find(id);
            _databaseContext.Pets.Remove(item);
        }

        public Pet Get(int id)
        {
            return _databaseContext.Pets.Find(id);
        }

        public IEnumerable<Pet> GetPetsOfAccount(string accountId)
        {
            return _databaseContext.Pets.Where(x => x.AccountId.Equals(accountId));
        }

        public IEnumerable<Pet> GetAll()
        {
            return _databaseContext.Pets;
        }

        public void Update(Pet item)
        {
            _databaseContext.Entry(item).State = EntityState.Modified;
        }

        public bool DeleteById(int Id)
        {
            Pet item = _databaseContext.Pets.Find(Id);
            _databaseContext.Pets.Remove(item);
            return true;
        }
    }
}