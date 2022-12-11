using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Kokoavatehtava
{
    /// <summary>
    /// Interaction logic for Animaatioikkuna.xaml
    /// </summary>
    public partial class Animaatioikkuna : Window
    {
        public Animaatioikkuna()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            //rec1

            DoubleAnimation x1 = new DoubleAnimation(); // Double-tyyppiselle arvolle
            x1.From = -100;
            x1.To = 41;
            x1.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            DoubleAnimation y1 = new DoubleAnimation();
            y1.From = -100;
            y1.To = 21;
            y1.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            rectangle1.BeginAnimation(Canvas.LeftProperty, x1);
            rectangle1.BeginAnimation(Canvas.TopProperty, y1);

            //rec2

            DoubleAnimation x2 = new DoubleAnimation(); // Double-tyyppiselle arvolle
            x2.From = -100;
            x2.To = 106;
            x2.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            DoubleAnimation y2 = new DoubleAnimation();
            y2.From = -100;
            y2.To = 21;
            y2.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            rectangle2.BeginAnimation(Canvas.LeftProperty, x2);
            rectangle2.BeginAnimation(Canvas.TopProperty, y2);

            //rec3

            DoubleAnimation x3 = new DoubleAnimation(); // Double-tyyppiselle arvolle
            x3.From = -100;
            x3.To = 75;
            x3.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            DoubleAnimation y3 = new DoubleAnimation();
            y3.From = -100;
            y3.To = 21;
            y3.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            rectangle3.BeginAnimation(Canvas.LeftProperty, x3);
            rectangle3.BeginAnimation(Canvas.TopProperty, y3);

            //rec4

            DoubleAnimation x4 = new DoubleAnimation(); // Double-tyyppiselle arvolle
            x4.From = -100;
            x4.To = 140;
            x4.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            DoubleAnimation y4 = new DoubleAnimation();
            y4.From = -100;
            y4.To = 21;
            y4.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            rectangle4.BeginAnimation(Canvas.LeftProperty, x4);
            rectangle4.BeginAnimation(Canvas.TopProperty, y4);




            //ellipse1
            DoubleAnimation x5 = new DoubleAnimation(); // Double-tyyppiselle arvolle
            x5.From = -100;
            x5.To = 235;
            x5.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            DoubleAnimation y5 = new DoubleAnimation();
            y5.From = -100;
            y5.To = 10;
            y5.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            ellipse1.BeginAnimation(Canvas.LeftProperty, x5);
            ellipse1.BeginAnimation(Canvas.TopProperty, y5);

            //rec5
            DoubleAnimation x6 = new DoubleAnimation(); // Double-tyyppiselle arvolle
            x6.From = -100;
            x6.To = 440;
            x6.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            DoubleAnimation y6 = new DoubleAnimation();
            y6.From = -100;
            y6.To = 14;
            y6.Duration = new Duration(TimeSpan.Parse("0:0:1"));

            rectangle5.BeginAnimation(Canvas.LeftProperty, x6);
            rectangle5.BeginAnimation(Canvas.TopProperty, y6);
        }
    }
}
