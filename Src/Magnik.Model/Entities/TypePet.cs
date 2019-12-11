using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Magnik.Model.Entities
{
    [Table("TypePet")]
    public class TypePet
    {
        [Key]
        public int ID_TypePet { get; set; }

        public string TypeOfPet { get; set; }

        [ForeignKey("PetId")]
        public int PetId { get; set; }
        public Pet Pet { get; set; }

        public ICollection<Breed> Breeds { get; set; }
    }
}
