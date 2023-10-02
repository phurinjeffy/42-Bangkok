/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strstr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: pvanasri <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/14 00:59:14 by pvanasri          #+#    #+#             */
/*   Updated: 2023/06/14 16:17:52 by pvanasri         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

char	*ft_strstr(char *str, char*to_find)
{
	unsigned int	i;
	unsigned int	j;

	if (to_find[0] == '\0')
	{
		return (str);
	}
	i = 0;
	while (str[i] != '\0')
	{
		j = 0;
		while (str[i + j] == to_find[j] && to_find[j] != '\0')
		{
			++j;
		}
		if (to_find[j] == '\0')
			return (str + i);
		++i;
	}
	return (0);
}
