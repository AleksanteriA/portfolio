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
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Kokoavatehtava
{
    /// <summary>
    /// Interaction logic for Piirtoikkuna.xaml
    /// </summary>
    public partial class Piirtoikkuna : Window
    {
        public Piirtoikkuna()
        {
            InitializeComponent();
        }

        private void canvas_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {
 
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            canvas.Children.Clear();
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            if (canvas.Children.Count > 0)
            {
                canvas.Children.RemoveAt(canvas.Children.Count - 1);
            }
        }

        private void canvas_MouseMove(object sender, MouseEventArgs e)
        {
            // var x = e.GetPosition(canvas).X - ellipse1.Width / 2;
            // var y = e.GetPosition(canvas).Y - ellipse1.Height / 2;

            var x = e.GetPosition(canvas).X;
            var y = e.GetPosition(canvas).Y;
            //Canvas.SetLeft(ellipse1, x);
            //Canvas.SetTop(ellipse1, y);

            Ellipse ellipse = new Ellipse();
            ellipse.Width = ellipse.Height = 10;
            ellipse.Fill = Brushes.Red;
            canvas.Children.Add(ellipse);  // IMPORTANT
            Canvas.SetLeft(ellipse, x);
            Canvas.SetTop(ellipse, y);
        }
    }
}
