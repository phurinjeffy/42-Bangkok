/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcat.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/14 00:30:52 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/14 16:16:41 by pvanasri         ###   ########.fr       */
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
	int	str2_len;
	int	j;

	str1_len = ft_strlen(dest);
	str2_len = ft_strlen(src);
	j = 0;
	while (j < str2_len)
	{
		dest[str1_len + j] = src[j];
		++j;
	}
	return (dest);
}
