using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Entities
{
    public class TypePet
    {
        public int ID_TypePet { get; set; }

        public string TypeOfPet { get; set; }

        public int PetID { get; set; }
        public Pet Pet { get; set; }

        public ICollection<Breed> Breeds { get; set; }
    }
}
