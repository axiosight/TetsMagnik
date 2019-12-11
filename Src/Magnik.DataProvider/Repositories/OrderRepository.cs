﻿using System.Collections.Generic;
using Magnik.DataProvider.Interfaces;
using Magnik.Model.Context;
using Magnik.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Magnik.DataProvider.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public OrderRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Create(Order item)
        {
            _databaseContext.Orders.Add(item);
        }

        public void Delete(int id)
        {
            Order item = _databaseContext.Orders.Find(id);
            _databaseContext.Orders.Remove(item);
        }

        public Order Get(int id)
        {
            return _databaseContext.Orders.Find(id);
        }

        public IEnumerable<Order> GetAll()
        {
            return _databaseContext.Orders;
        }

        public void Update(Order item)
        {
            _databaseContext.Entry(item).State = EntityState.Modified;
        }
    }
}