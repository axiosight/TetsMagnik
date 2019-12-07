using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Entities
{
    public class PetInfo
    {
        public int ID_PetInfo { get; set; }

        public string TitlePetInfo { get; set; }

        public string DescriptionPetInfo { get; set; }

        public int PetID { get; set; }
        public Pet Pet { get; set; }
    }
}