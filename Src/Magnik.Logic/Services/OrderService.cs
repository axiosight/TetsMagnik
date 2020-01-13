using Magnik.DataProvider.Interfaces;
using Magnik.Logic.Interfaces;
using Magnik.Model.Context.CommitProvider;
using Magnik.Model.Entities;
using Magnik.Model.ViewModel;
using Magnik.Model.ViewModel.OrderViewModel;
using System;
using System.Collections.Generic;

namespace Magnik.Logic.Services
{
    public class OrderService : IOrderService
    {
        private readonly ICommitProvider _commitProvider;
        private readonly IOrderRepository _orderRepository;
        private readonly IAccountRepository _accountRepository;

        public OrderService(ICommitProvider commitProvider, IOrderRepository orderRepository, IAccountRepository accountRepository)
        {
            _commitProvider = commitProvider;
            _orderRepository = orderRepository;
            _accountRepository = accountRepository;
        }

        public ResponseVM CreateOrder(OrderVM model, string email)
        {
            bool res = false;

            if (email != null)
            {
                _orderRepository.Create(new Order
                {
                    StartDateTime = model.StartDateTime,
                    EndDateTime = model.EndDateTime,
                    OrderUserName = email,
                    OrderTimeNow = DateTime.Now,
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

        public IEnumerable<Order> GetOrdersOfAccount(string email)
        {
            var account = _accountRepository.FindByNameAccount(email);
            return _orderRepository.GetOrdersOfAccount(account.Result.Id);
        }

        public bool DeleteOrderById(int petId)
        {
            var res = _orderRepository.DeleteById(petId);
            _commitProvider.Save();
            return res;
        }
    }
}