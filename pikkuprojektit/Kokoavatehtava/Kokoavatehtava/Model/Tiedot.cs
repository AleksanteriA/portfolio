using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kokoavatehtava.Model
{
    class Tiedot
    {
        public string Name { get; set; }
        public string Age { get; set; }
        public string Sex { get; set; }

        public Tiedot(string name, string age, string sex)
        {
            Name = name;
            Age = age;
            Sex = sex;
        }
    }
}
