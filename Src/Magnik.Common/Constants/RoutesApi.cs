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
        }

    }
}
