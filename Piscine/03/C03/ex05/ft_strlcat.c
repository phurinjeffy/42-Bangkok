/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlcat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/14 14:53:47 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/14 16:14:29 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

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

unsigned int	ft_strlcat(char *dest, char *src, unsigned int size)
{
	unsigned int	dest_len;
	unsigned int	i;

	dest_len = ft_strlen(dest);
	if (size == 0 || dest_len > size)
	{
		return (0);
	}
	size -= dest_len;
	i = 0;
	while (*src && size)
	{
		dest[dest_len + i] = src[i];
		++i;
		size--;
	}
	dest[dest_len + i] = '\0';
	return (dest_len + i);
}
