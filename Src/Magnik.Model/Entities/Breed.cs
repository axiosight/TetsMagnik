using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Entities
{
    public class Breed
    {
        public int ID_Breed { get; set; }
        public string BreedName { get; set; }

        public int TypeID { get; set; }
        public Type Type { get; set; }
    }
}
