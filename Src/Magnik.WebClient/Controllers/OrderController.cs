using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magnik.Common.Constants;
using Magnik.Logic.Interfaces;
using Magnik.Model.ViewModel.OrderViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magnik.WebClient.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost(RoutesApi.Order.AddOrder)]
        public IActionResult AddComment([FromForm]OrderVM model)
        {
            var email = User.Identity.Name;
            if (model != null)
            {
                _orderService.CreateOrder(model, email);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet(RoutesApi.Order.GetOrder)]
        public IActionResult Get()
        {
            var email = User.Identity.Name;

            if (email != null)
            {
                var res = _orderService.GetOrdersOfAccount(email);
                return Ok(res);
            }
            return BadRequest();
        }

        [HttpDelete(RoutesApi.Order.DeleteOrder)]
        public IActionResult Delete(int id)
        {
            bool del = _orderService.DeleteOrderById(id);
            if (del)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}