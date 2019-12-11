using System.Collections.Generic;
using Magnik.DataProvider.Interfaces;
using Magnik.Model.Context;
using Magnik.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Magnik.DataProvider.Repositories
{
    public class ServiceOfSitterRepository : IServiceOfSitterRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public ServiceOfSitterRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Create(ServiceOfSitter item)
        {
            _databaseContext.ServiceOfSitters.Add(item);
        }

        public void Delete(int id)
        {
            ServiceOfSitter item = _databaseContext.ServiceOfSitters.Find(id);
            _databaseContext.ServiceOfSitters.Remove(item);
        }

        public ServiceOfSitter Get(int id)
        {
            return _databaseContext.ServiceOfSitters.Find(id);
        }

        public IEnumerable<ServiceOfSitter> GetAll()
        {
            return _databaseContext.ServiceOfSitters;
        }

        public void Update(ServiceOfSitter item)
        {
            _databaseContext.Entry(item).State = EntityState.Modified;
        }
    }
}