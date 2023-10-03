char *ft_memset(char *b, char c, int len)
{
    int i;

    i = 0;
    while (i < len)
    {
        b[i] = c;
        i++;
    }
    return (b);
}