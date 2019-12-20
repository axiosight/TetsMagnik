using Magnik.Model.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Magnik.Model.Context.Initializer
{
    public class Initializer
    {
        public static async Task Seed(DatabaseContext context, UserManager<Account> userManager, RoleManager<IdentityRole> roleManager)
        {
            string adminEmail = "admin@gmail.com";
            string userEmail = "user@gmail.com";
            string sitterEmail = "sitter@gmail.com";
            string password = "657F660n_";

            if (await roleManager.FindByNameAsync("admin") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("admin"));
            }
            if (await roleManager.FindByNameAsync("user") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("user"));
            }
            if (await roleManager.FindByNameAsync("sitter") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("sitter"));
            }

            if (await userManager.FindByNameAsync(adminEmail) == null)
            {
                Account admin = new Account { Email = adminEmail, UserName = adminEmail, EmailConfirmed = true };

                var result = await userManager.CreateAsync(admin, password);

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "admin");
                }
            }

            if (await userManager.FindByNameAsync(userEmail) == null)
            {
                Account user = new Account { Email = userEmail, UserName = userEmail, EmailConfirmed = true };

                var result = await userManager.CreateAsync(user, password);

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "user");
                }
            }

            if (await userManager.FindByNameAsync(sitterEmail) == null)
            {
                Account sitter = new Account { Email = sitterEmail, UserName = sitterEmail, EmailConfirmed = true };

                var result = await userManager.CreateAsync(sitter, password);

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(sitter, "sitter");
                }
            }

            await context.SaveChangesAsync();
        }
    }
}
