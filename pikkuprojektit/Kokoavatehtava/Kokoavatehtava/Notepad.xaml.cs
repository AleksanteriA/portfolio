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
    /// Interaction logic for Notepad.xaml
    /// </summary>
    public partial class Notepad : Window
    {
        public Notepad()
        {
            InitializeComponent();
        }
        //File/Exit
        private void MenuItem_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void MenuItem_Click_1(object sender, RoutedEventArgs e)
        {
            Microsoft.Win32.SaveFileDialog dlg = new Microsoft.Win32.SaveFileDialog();
            dlg.Filter = dlg.Filter = "Text documents(.txt)| *.txt | All files(*.*) | *.*";
            dlg.ShowDialog();
        }

        private void textBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            textBlock.Text = $"{textBox.Text.Length} merkkiä";
            //textBlock.Text = textBox.Text.Length + "merkkiä";
        }

        private void MenuItem_Click_2(object sender, RoutedEventArgs e)
        {
            Microsoft.Win32.OpenFileDialog dlg = new Microsoft.Win32.OpenFileDialog();
            dlg.Filter = "Text documents (.txt)|*.txt|All files(*.*)| *.*";
            dlg.ShowDialog();
            {
                try
                {
                    textBox.Text = System.IO.File.ReadAllText(dlg.FileName);
                }
                catch (Exception ex)
                {

                }

            }
        }

    }
}
