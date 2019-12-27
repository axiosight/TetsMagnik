using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Common.Constants
{
    public class RoutesApi
    {
        public const string Root = "api";
        public static class Account
        {
            public const string Login = Root + "/account/login";
            public const string Register = Root + "/account/register";
            public const string LogOut = Root + "/account/logout";
            public const string Get = Root + "/account/getAccount";
            public const string UpdateAccount = Root + "/account/updateAccount";
        }

        public static class Pet
        {
            public const string AddPet = Root + "/pet/addPet";
            public const string DeletePet = Root + "/pet/deletePet/{id}";
            public const string UpdatePet = Root + "/pet/updatePet";
            public const string ViewAllPetsOfAccount = Root + "/pet/getPetsAccount";
        }

        public static class Sitter
        {
            public const string GetAllSitters = Root + "/sitter/getAllSitters";
        }

        public static class Comment
        {
            public const string AddComment = Root + "/comment/addComment";
            public const string DeleteComment = Root + "/comment/deleteComment/{id}";
            public const string GetCommentsOfAccount = Root + "/comment/getCommentOfAccount";
        }

    }
}