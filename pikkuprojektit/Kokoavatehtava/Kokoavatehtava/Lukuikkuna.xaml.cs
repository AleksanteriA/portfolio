using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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
    /// Interaction logic for Lukuikkuna.xaml
    /// </summary>
    public partial class Lukuikkuna : Window
    {
        static readonly HttpClient client = new HttpClient();
        public Lukuikkuna()
        {
            InitializeComponent();
        }


        //Communist Manifesto
        private async void Button_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                HttpResponseMessage response = await client.GetAsync("https://www.gutenberg.org/files/61/61.txt");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                textBox.Text = responseBody;

            }
            catch (HttpRequestException e1)
            {
                Console.WriteLine("\n Exception caught");
                Console.WriteLine("Message : {0} ", e1.Message);
            }
        }


        //Mein Kampf
        private async void Button_Click_1(object sender, RoutedEventArgs e)
        {

            try
            {
                HttpResponseMessage response = await client.GetAsync("http://gutenberg.net.au/ebooks02/0200601.txt");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                textBox.Text = responseBody;

            }
            catch (HttpRequestException e1)
            {
                Console.WriteLine("\n Exception caught");
                Console.WriteLine("Message : {0} ", e1.Message);
            }
        }


        //
        private async void Button_Click_2(object sender, RoutedEventArgs e)
        {
            try
            {
                HttpResponseMessage response = await client.GetAsync("https://www.gutenberg.org/files/345/345-0.txt");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                textBox.Text = responseBody;

            }
            catch (HttpRequestException e1)
            {
                Console.WriteLine("\n Exception caught");
                Console.WriteLine("Message : {0} ", e1.Message);
            }
        }
    }
}
