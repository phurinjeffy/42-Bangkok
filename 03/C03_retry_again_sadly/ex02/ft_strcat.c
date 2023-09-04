/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcat.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/14 00:30:52 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/16 09:52:43 by pvanasri         ###   ########.fr       */
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

char	*ft_strcat(char *dest, char *src)
{
	int	str1_len;
	int	i;

	str1_len = ft_strlen(dest);
	i = str1_len;
	while (*src)
	{
		dest[i] = *src;
		++i;
		++src;
	}
	dest[i] = '\0';
	return (dest);
}
