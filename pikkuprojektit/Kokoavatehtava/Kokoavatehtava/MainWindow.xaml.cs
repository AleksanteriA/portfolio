using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Kokoavatehtava
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            //Jos haluaa suomeksi
            //System.Threading.Thread.CurrentThread.CurrentUICulture =
            //new System.Globalization.CultureInfo("fi-FI");

            InitializeComponent();
        }

        // kun suljetaan
        private void Window_Closed(object sender, EventArgs e)
        {
            //Properties.Settings.Default.Nimi = textBox.Text;
            Properties.Settings.Default.Save();

            var tiedot = new Model.Tiedot(txtName.Text, txtAge.Text, txtSex.Text);

            File.WriteAllText("juna.json", JsonConvert.SerializeObject(tiedot));
        }

        // kun avataan
        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //textBox.Text = Properties.Settings.Default.Nimi;
            //TODO: lue objektiin                            <luottavan objektin class>
            
            Model.Tiedot tiedot = JsonConvert.DeserializeObject<Model.Tiedot>(File.ReadAllText("juna.json"));
            //Model.Osoite osoite = null;

            txtName.Text = tiedot.Name;
            txtAge.Text = tiedot.Age;
            txtSex.Text = tiedot.Sex;
            
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Piirtoikkuna piirtoikkuna = new Piirtoikkuna();
            piirtoikkuna.ShowDialog();

        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Animaatioikkuna animaatioikkuna = new Animaatioikkuna();
            animaatioikkuna.ShowDialog();
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            Matikkaikkuna matikkaikkuna = new Matikkaikkuna();
            matikkaikkuna.ShowDialog();
        }

        private void Button_Click_3(object sender, RoutedEventArgs e)
        {
            Lukuikkuna lukuikkuna = new Lukuikkuna();
            lukuikkuna.ShowDialog();
        }

        private void Button_Click_4(object sender, RoutedEventArgs e)
        {
            Notepad notepad = new Notepad();
            notepad.ShowDialog();
        }
    }
}
