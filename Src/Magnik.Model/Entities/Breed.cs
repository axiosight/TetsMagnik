using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Magnik.Model.Entities
{
    [Table("Breed")]
    public class Breed
    {
        [Key]
        public int ID_Breed { get; set; }

        public string BreedName { get; set; }

        [ForeignKey("TypeId")]
        public int TypeId { get; set; }
        public TypePet Type { get; set; }
    }
}
