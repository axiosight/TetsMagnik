using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Magnik.Common.Constants;
using Magnik.Logic.Interfaces;
using Magnik.Model.ViewModel.CommentViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magnik.WebClient.Controllers
{
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;

        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpPost(RoutesApi.Comment.AddComment)]
        public IActionResult AddComment([FromForm]CommentVM model)
        {
            var email = User.Identity.Name;
            if(model != null)
            {
                _commentService.CreateComment(model, email);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet(RoutesApi.Comment.GetCommentsOfAccount)]
        public IActionResult GetCommentsOfAccount()
        {
            var email = User.Identity.Name;
            if (email != null)
            {
                var res = _commentService.GetCommentsOfAccount(email);
                return Ok(res);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete(RoutesApi.Comment.DeleteComment)]
        public IActionResult Delete(int id)
        {
            bool del = _commentService.DeleteCommentById(id);
            if (del)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}