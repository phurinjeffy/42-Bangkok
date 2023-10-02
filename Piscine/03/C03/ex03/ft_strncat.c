/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/14 00:41:28 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/14 14:50:12 by pvanasri         ###   ########.fr       */
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

char	*ft_strncat(char *dest, char *src, unsigned int nb)
{
	unsigned int	dest_len;

	dest_len = ft_strlen(dest);
	while (*src && nb)
	{
		dest[dest_len] = *src;
		dest_len++;
		nb--;
		src++;
	}
	dest[dest_len] = '\0';
	return (dest);
}
