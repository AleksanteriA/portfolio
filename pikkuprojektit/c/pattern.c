#include<stdio.h>

int main()
{
    int i, j, n = 6;
    for(i = 1; 1<=n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if(i >= j)
                printf("* ");
            else
                printf(" ");
                
        }
        prtinf("\n");
    }
    return 0;
}
