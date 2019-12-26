using System;
using System.Collections.Generic;
using System.Text;

namespace Magnik.Model.ViewModel.PetViewModel
{
    public class PetVM
    {
        public int PetID { get; set; }

        public string PetImg { get; set; }

        public string PetName { get; set; }

        public int PetAge { get; set; }

        public double PetWeight { get; set; }

        public bool PetSex { get; set; }

        public string AccountId { get; set; }
    }
}
