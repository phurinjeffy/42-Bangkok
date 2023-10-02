/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncpy.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/13 17:18:58 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/13 23:55:39 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		++i;
	}
	return (i);
}

char	*ft_strncpy(char *dest, char *src, unsigned int n)
{
	unsigned int	i;

	i = 0;
	while (i < n)
	{
		dest[i] = src[i];
		++i;
	}
	int	j;

	if (ft_strlen(dest) <= ft_strlen(src))
	{
		j = n;
		while (src[j] != '\0')
		{
			dest[j] = '\0';
		}
	}
	return (dest);
}

// int main(void)
// {
//     char *str1 = "hellojeffjeffjeff";
//     char *str2 = "test";

//     str2 = ft_strncpy(str2, str1, 5);

//     printf("%s", str2);

//     return 0;
// }
