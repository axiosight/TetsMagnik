using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.Entities
{
    public class Pet
    {
        public int ID_Pet { get; set; }

        public byte[] PetImg { get; set; }

        public string PetName { get; set; }

        public int PetAge { get; set; }

        public double PetWeight { get; set; }

        public bool PetSex { get; set; }

        public string AccountID { get; set; }
        public Account Account { get; set; }

        public ICollection<PetInfo> PetInfos { get; set; }

        public TypePet TypePet { get; set; }
    }
}
