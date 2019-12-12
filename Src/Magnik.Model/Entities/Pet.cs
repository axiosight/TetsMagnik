using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Magnik.Model.Entities
{
    [Table("Pet")]
    public class Pet
    {
        [Key]
        public int ID_Pet { get; set; }

        public string PetImg { get; set; }

        public string PetName { get; set; }

        public int PetAge { get; set; }

        public double PetWeight { get; set; }

        public bool PetSex { get; set; }

        [ForeignKey("AccountId")]
        public string AccountId { get; set; }
        public Account Account { get; set; }

        public ICollection<PetInfo> PetInfos { get; set; }

        public TypePet TypePet { get; set; }
    }
}
