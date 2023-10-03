void ft_bzero(char *b, int len)
{
    int i;

    i = 0;
    while (i < len)
    {
        b[i] = '0';
        i++;
    }
}