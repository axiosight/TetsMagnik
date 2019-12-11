using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Magnik.Model.Entities
{
    [Table("PetInfo")]
    public class PetInfo
    {
        [Key]
        public int ID_PetInfo { get; set; }

        public string TitlePetInfo { get; set; }

        public string DescriptionPetInfo { get; set; }

        [ForeignKey("PetId")]
        public int PetId { get; set; }
        public Pet Pet { get; set; }
    }
}